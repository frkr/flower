# Entrada

```ts
import {Teste} from './Teste';

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        
        return new Teste().index(request, env);
        
    }
};



```

