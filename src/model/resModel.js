class BaseModel {
  constrcutor(data, message) {
    if(typeof data == 'string') {
      this.message = data
      data = null
      message = null
    }
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constrcutor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}