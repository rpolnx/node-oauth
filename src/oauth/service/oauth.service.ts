import { Repository } from 'typeorm'
import { Oauth } from '../model/entity/oauth.entity'

export class OauthService {
    constructor(private repository: Repository<Oauth>) {}

    async getById(id: string): Promise<Oauth> {
        const oauth: Oauth = await this.repository.findOne(id)

        if (!oauth) {
            throw new Error('Token not found')
        }

        return oauth
    }

    async create(object: Oauth): Promise<String> {
        const oauth: Oauth = await this.repository.create(object)

        if (!oauth) {
            throw new Error('Error creating Oauth')
        }

        return oauth.id
    }

    async delete(id: string): Promise<void> {
        await this.repository.update(id)
    }
}
