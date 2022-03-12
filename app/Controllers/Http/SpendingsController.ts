import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SpendingsController {
  
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'Id',
      'Nome',
      'Categoria',
      'Vencimento',
      'Valor',
      'Parcelamento',
      'Status'
    ])
    console.log(data)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
