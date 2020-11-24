const getList = (author, keyword) => {
  // 先返回假数据，格式正确
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1606222981090,
      author: '张三'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1606222988990,
      author: '李四'
    }
  ]
}

module.exports = {
  getList
}