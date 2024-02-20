import { Router } from "express";
import * as departamentController from "../controllers/controller.department.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyRoleAdmin from "../middlewares/verifyRoleAdmin.js";
import verifyRolesAdmins from "../middlewares/verifyRolesAdmins.js";
import verifyRoleWithoutOperator from "../middlewares/verifyRoleWithoutOperator.js";

const router = Router();

// Get all tickets
router.get("/departments", verifyToken, verifyRoleAdmin, departamentController.getAllDepartments);

// Add new departament
router.post("/add-department", verifyToken, verifyRoleAdmin, departamentController.newDepartment);

// Get department by Id
router.get("/tickets-department/:id", verifyToken, verifyRolesAdmins, departamentController.getDepartmentTickestById);
// Get Colaborator by id of department
router.get("/colaborators-department/:id", verifyToken, verifyRolesAdmins, departamentController.getColaboratorsByDepartment);


router.get("/department-area", verifyToken, departamentController.getDepartmentAreaManager);

// router.get("/department/user/:id",verifyToken, departamentController.getDepartmentAreaManager);

export default router;