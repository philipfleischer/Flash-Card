// import Document from '../models/Document.js';
// import Flashcard from '../models/Flashcard.js';
// import Quiz from '../models/Quiz.js';
// import { extractTextFromPDF } from '../utils/pdfParser.js';
// import { chunkText } from '../utils/textChunker.js';
// import mongoose from 'mongoose';
import fs from 'fs/promises';

// @desc    Upload PDF document
// @route   POST /api/documents/upload
// @access  Private
export const uploadDocument = async (req, res, next) => {
  try {
  } catch (error) {
    // Clean up file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};

// @desc    Get all user document
// @route   GET /api/documents
// @access  Private
export const getDocuments = async (req, res, next) => {
  try {
  } catch (error) {
    // Clean up file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};

// @desc    GET single document with chunks
// @route   GET /api/documents/:id
// @access  Private
export const getDocument = async (req, res, next) => {
  try {
  } catch (error) {
    // Clean up file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};

// @desc    Delete document
// @route   DELETE /api/documents/:id
// @access  Private
export const deleteDocument = async (req, res, next) => {
  try {
  } catch (error) {
    // Clean up file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};

// @desc    Update document title
// @route   PUT /api/documents/:id
// @access  Private
export const updateDocument = async (req, res, next) => {
  try {
  } catch (error) {
    // Clean up file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};
