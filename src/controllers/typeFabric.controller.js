import { create, update, deleteById, getAll, getById } from '../models/typeFabric.model.js';

export const createTypeFabric = async (req, res) => {
    try {
        const success = await create(req.body);
        res.status(201).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updateTypeFabric = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const data = { id, name };
        const success = await update(data);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(202).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteTypeFabricById = async (req, res) => {
    try {
        const success = await deleteById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllTypeFabric = async (req, res) => {
    try {
        const success = await getAll();
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getTypeFabricById = async (req, res) => {
    try {
        const success = await getById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Data Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
