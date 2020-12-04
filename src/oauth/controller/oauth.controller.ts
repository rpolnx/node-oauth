import { validateOrReject } from 'class-validator'
import { Request, Response } from 'express'

export class OauthController {
    constructor(private productService: IProductService) {}

    async create(req: Request, res: Response): Promise<Response<SimpleId>> {
        const product: Product = new Product(req.body)
        await validateOrReject(product)

        const created: SimpleId = await this.productService.create(product)

        return res.status(201).json(created)
    }

    async delete(req: Request, res: Response): Promise<Response<Product>> {
        const id: string = req.params.id
        await validateOrReject(new SimpleId(id))

        await this.productService.delete(id)

        return res.status(204).json()
    }
}
