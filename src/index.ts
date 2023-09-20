import { Teste } from './Teste';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		console.log(
			await new Teste().index()
		);

		return new Response('sss', { status: 200 });
	}
};
