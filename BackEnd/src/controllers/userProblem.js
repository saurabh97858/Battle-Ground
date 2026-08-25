import { runJudge } from "../judge1/submission.js";
import Problem from "../models/problem.js";
import User from "../models/user.js";
import { Submission } from "../models/submission.js";
import { withTimeout } from "../utils/dbSafety.js";

export const createProblem = async (req, res) => {
    try {
        if (req.result.role !== "admin")
            throw new Error("Invalid Credentials")

        const { title, description, difficulty, tags, visibleTestCases
            , hiddenTestCases, startCode, referenceSolution, problemCreator
            , problemSignature, judgeConfig } = req.body

        if (!problemSignature) {
            return res.status(400).send("Problem Signature is required");
        }
        console.log(problemSignature)
        console.log( visibleTestCases , hiddenTestCases)
        for (const { language, completeCode } of referenceSolution) {

            const allTestCases = [...visibleTestCases, ...hiddenTestCases];

            const result = await runJudge({
                language,
                code: completeCode,
                testCases: allTestCases,
                problemSignature: problemSignature,
                judgeConfig
            });
            console.log( result)

            if (!result.passed) {
                return res.status(400).json({
                    message: "Reference solution failed validation",
                    language: language,
                    details: result.details
                });
            }
        }


        const problem = await Problem.create({
            ...req.body,
            problemCreator: req.result._id
        })

        res.status(200).json({
            message: "Problem created successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: error?.message || "Failed to create problem"
        })
    }
}

export const updateProblem = async (req, res) => {
    try {
        if (req.result.role !== 'admin')
            throw new Error("Invalid Credentials")

        const { id } = req.params;
        if (!id) {
            return res.status(400).send("Missing ID Field");
        }

        const { title, description, difficulty, tags, visibleTestCases
            , hiddenTestCases, startCode, referenceSolution, problemCreator } = req.body

        const problem = await Problem.findById(id);

        if (!problem)
            return res.status(404).send("ID is not persent in server");

        const update = await Problem.findByIdAndUpdate(id, { ...req.body }, { runValidators: true, new: true })

        res.json({
            message: "Problem updated successfully"
        })


    } catch (err) {
        res.status(500).json({
            message: err?.message || "Failed to update problem"
        });
    }
}

export const deleteProblem = async (req, res) => {
    try {
        if (req.result.role !== 'admin')
            throw new Error("Invalid Credentials")

        const { id } = req.params;

        const deleted = await Problem.findByIdAndDelete(id);

        if (!deleted)
            return res.status(404).json({
                message: "Problem not found"
            })

        res.json({
            message: "Problem deleted successfully"
        })


    } catch (err) {
        res.status(500).json({
            message: err?.message || "Failed to delete problem"
        })
    }
}

export const getPublicProblemById = async (req, res) => {
    try {
        const { id } = req.params;
        const problem = await Problem.findById(id)
            .select('_id title description difficulty tags visibleTestCases startCode referenceSolution problemSignature');

        if (!problem) {
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        res.status(200).json(problem);
    } catch (err) {
        res.status(500).json({
            message: err?.message || "Failed to fetch problem"
        });
    }
}

export const getPublicProblems = async (_req, res) => {
    try {
        const problems = await withTimeout(
            Problem.find({}).select('_id title difficulty tags').lean(),
            [],
            1200
        );
        res.status(200).json(problems || []);
    } catch (err) {
        console.error("getPublicProblems DB error:", err?.message || err);
        res.status(200).json([]);
    }
}

export const getProblemById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("Missing ID Field");
        }

        let problem;
        if (req.result?.role === 'admin') {
            problem = await withTimeout(
                Problem.findById(id).populate('problemCreator', 'firstName emailId'),
                null,
                1200
            );
        } else {
            problem = await withTimeout(
                Problem.findById(id).select('_id title description difficulty tags visibleTestCases startCode referenceSolution problemSignature'),
                null,
                1200
            );
        }

        if (!problem)
            return res.status(404).send("Problem Not Found")

        res.send(problem)

    } catch (err) {
        res.status(500).send("Error in fetching Problem " + err)
    }
}

export const getAllProblem = async (req, res) => {
    try {
        let problems;
        if (req.result?.role === 'admin') {
            problems = await withTimeout(
                Problem.find({})
                    .select('_id title difficulty tags problemCreator createdAt updatedAt')
                    .populate('problemCreator', 'firstName emailId')
                    .lean(),
                [],
                1200
            );
        } else {
            problems = await withTimeout(
                Problem.find({}).select('_id title difficulty tags').lean(),
                [],
                1200
            );
        }

        res.status(200).json(problems || []);

    } catch (err) {
        console.error("getAllProblem DB error:", err?.message || err);
        res.status(200).json([]);
    }
}


export const solvedAllProblembyUser = async (req, res) => {

    try {

        const userId = req.result._id;
        const acceptedProblemIds = await Submission.distinct("problemId", {
            userId,
            status: "Accepted"
        });

        const solvedProblems = await Problem.find({
            _id: { $in: acceptedProblemIds }
        }).select("_id title difficulty tags").lean();

        res.status(200).send(solvedProblems);

    }
    catch (err) {
        console.error("solvedAllProblembyUser error:", err?.message || err);
        res.status(200).json([]);
    }
}

export const submittedProblem = async (req, res) => {

    try {

        const userId = req.result._id;
        const problemId = req.params.pid;

        const ans = await Submission.find({ userId, problemId });

        if (ans.length == 0)
            res.status(200).send("No Submission is persent");

        res.status(200).send(ans);

    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

