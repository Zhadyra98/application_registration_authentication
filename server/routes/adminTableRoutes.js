const { Router } = require('express')
const adminTableHandlers = require('../handlers/adminTableHandlers')
const router = Router();

router.get('/api/admin', adminTableHandlers.table_get);

module.exports = router;