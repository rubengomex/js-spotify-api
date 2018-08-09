export default class Test {
  constructor({ name }) {
    this.name = name
  }

  async getOne() {
    const response = await Promise.resolve('hello')
    console.log(response)
    return response
  }
}
