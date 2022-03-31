import express from "express"
import { getAllUsers, Register, Login, Logout } from "../controller/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controller/RefreshToken.js"
import { getAllProducts, createProduct, getProductsById, updateProduct, deleteProduct } from "../controller/Products.js"
import { getAllCpuUser, getCpuUserById, createCpuUser, updateCpuUser, deleteCpuUser } from "../controller/CpuUsers.js"
import { getAllCpu, getCpuById, createCpu, updateCpu, deleteCpu } from "../controller/Cpu.js"
import {
  getAllKaryawan,
  getKaryawanById,
  createKaryawan,
  updateKaryawan,
  deleteKaryawan
} from "../controller/Karyawan.js"
import { getAllWilayah, getAllKota, getAllKotaById, getAllKecById, getAllKelById } from "../controller/Wilayah.js"
const router = express.Router()

router.get("/users", verifyToken, getAllUsers)
router.post("/users", Register)
router.post("/login", Login)
router.get("/token", refreshToken)
router.delete("/logout", Logout)

router.get("/products", getAllProducts)
router.get("/products/:id", getProductsById)
router.post("/products", createProduct)
router.patch("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

router.get("/cpu", getAllCpu)
router.get("/cpu/:id", getCpuById)
router.post("/cpu", createCpu)
router.patch("/cpu/:id", updateCpu)
router.delete("/cpu/:id", deleteCpu)

router.get("/cpu_user", getAllCpuUser)
router.get("/cpu_user/:id", getCpuUserById)
router.post("/cpu_user", createCpuUser)
router.patch("/cpu_user/:id", updateCpuUser)
router.delete("/cpu_user/:id", deleteCpuUser)

router.get("/pegawai", getAllKaryawan)
router.get("/karyawan/:id", getKaryawanById)
router.post("/karyawan", createKaryawan)
router.patch("/karyawan/:id", updateKaryawan)
router.delete("/karyawan/:id", deleteKaryawan)

router.get("/wilayah", getAllWilayah)
router.get("/kota", getAllKota)
router.get("/kota/:id", getAllKotaById)
router.get("/kec/:id", getAllKecById)
router.get("/kel/:id", getAllKelById)
export default router
