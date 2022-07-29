const { Router } = require('express')
const adminTableHandlers = require('../handlers/adminTableHandlers')
const router = Router();

router.get('/api/admin', adminTableHandlers.table_get);
router.put('/api/admin', adminTableHandlers.table_update);
router.delete('/api/admin', adminTableHandlers.table_delete);

module.exports = router;