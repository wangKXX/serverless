var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
const api = require('../database/index');

const fileUtils = require('../fsutils')
let multipartMiddleware = multipart({
  uploadDir: './temp'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mdm/proxy/sku/uploadList', (req, res, next) => {
  const { tenantCode, page: { size, page} } = req.body
  const data = api.getUpdataList(size, page, tenantCode)
  res.send(data)
});

router.post('/mdm/proxy/sku/downloadList', (req, res, next) => {
  const { tenantCode, page: { size, page} } = req.body
  const data = api.getDownloadList(size, page, tenantCode)
  res.send(data)
})
router.post('/mdm/upload', multipartMiddleware, (req, res, next) => {
  console.log(req.body, req.files);
  const { file: { name, path }} = req.files
  fileUtils.reName(path, `./temp/${name}`, () => {
    res.send({
      errorCode: 200,
      hitMsg: '上传成功'
    })
  })
})
module.exports = router;
