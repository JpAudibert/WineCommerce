import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ProductsController {
  public async index({ request, response }) {
    const limit = 20
    const page = request.input('page', 1)

    const users = await Database.from('products')
      .select('*')
      .orderBy('created_at', 'desc')
      .paginate(page, limit)

    if (users === null) {
      return response.json()
    }
  }
}
