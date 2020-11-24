const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    console.log(new SuccessModel(listData))
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '博客详情接口'
    }
  }

  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/add') {
    return {
      msg: '新建博客接口'
    }
  }

  // 编辑博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '编辑博客接口'
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '删除博客接口'
    }
  }
}

module.exports = handleBlogRouter