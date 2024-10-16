const express = require("express");
const router = express.Router();

const {
  createItem,
  getAllItems,
  updateItemByID,
  deleteItemByID,
} = require("../controllers/pantryController");

router.post("/create-item", createItem);
router.get("/get-all-items", getAllItems);
router.put("/find-and-update/:id", updateItemByID);
router.delete("/find-and-delete/:id", deleteItemByID);

module.exports = router;
