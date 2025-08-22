import express from "express"
import multer from "multer"

const router = express.Router();
import Item from '../models/ItemModel.js';
import ItemDetail from '../models/itemDetailsModel.js';

// Multer config
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'))
});
const upload = multer({ storage });

/**
 * POST /items/full
 * Create new Item + ItemDetail
 */
router.post('/full', upload.fields([
  { name: 'itemImage', maxCount: 1 },
  { name: 'detailImages', maxCount: 19 }
]), async (req, res) => {
  try {
    const {
      name, price, description,
      license, enginePower, fuelType, transmission, seat, fuelEconomy,
      engineType, year, color, specialMark
    } = req.body;

    const itemImage = req.files?.itemImage?.[0]?.path || null;
    const detailImages = (req.files?.detailImages || []).map(f => f.path);

    // 1) Create Item
    const item = await Item.create({
      name,
      price: Number(price),
      description,
      image: itemImage
    });

    // 2) Create ItemDetail
    const details = await ItemDetail.create({
      itemId: item._id,
      license,
      enginePower: Number(enginePower),
      fuelType,
      transmission,
      seat: Number(seat),
      fuelEconomy,
      engineType,
      year,
      color,
      specialMark,
      images: detailImages
    });

    res.status(201).json({ message: 'Item and details created', item, details });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET /items
 * Homepage listing (items only)
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().select('name price description image').lean();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET /items/details/:id
 * Details page (full details for single item)
 */
router.get('/details/:id', async (req, res) => {
  try {
    const details = await ItemDetail.findOne({ itemId: req.params.id })
      .populate('itemId') // join name, price, description, image
      .lean();

    if (!details) return res.status(404).json({ message: 'Item details not found' });

    res.json(details);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET /items/filter
 * Filter based on detail fields
 * Example: /items/filter?fuelType=diesel&year=2024
 */
router.get('/filter', async (req, res) => {
  try {
    const query = {};
    Object.keys(req.query).forEach(key => {
      query[key] = req.query[key];
    });

    const filtered = await ItemDetail.find(query).populate('itemId').lean();
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/category', upload.single('image'), async (req, res) => {
  try {
    const { brand } = req.body;
    const image = req.file ? req.file.path : null;

    const category = await Category.create({ brand, image });
    res.status(201).json({ message: 'Category created', category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/category', async (_req, res) => {
  try {
    const categories = await Category.find().lean();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).lean();
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/category/:id', upload.single('image'), async (req, res) => {
  try {
    const { brand } = req.body;
    const updateData = { brand };
    if (req.file) updateData.image = req.file.path;

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category updated', category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/category/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





export default router;

