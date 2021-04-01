# Products API Medium

## Data:
Example of a trade data JSON object:
```
{
   "id":1,
   "name": "Premium Roast Coffee",
   "price": 1.19,
   "mrp": 1.19,
   "stock": 1,
   "isPublished": false
}
```
## Environment 
- Node Version: ^12.18.2
- Default Port: 8000

**Read Only Files**
- `test/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
