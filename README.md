# rest-server-app
This is a RESTful API project that uses in-memory data structure to store and manage data during runtime.
The project does not have any database configurations.

### Teck Stack
- Node.js
- Express.js
- Typescript
- npm

### Setup Instructions
#### Clone the reporitory
```bash
git clone git@github.com:cynthiaawuor/rest-server-app.git
cd rest-server-app
```
#### Install dependencies
```bash
npm install
```

#### Run the server loccally
```bash
npx tsx server.ts

# access the server on:
http://localhost:3000
# use API client of your choice. In my case I used Vscode's Thunder Client
```
### Usage
#### API Endpoints
```GET /tasks```\
Retrieve all tasks\
```GET /tasks/:id```\
get task by id\
```POST /tasks```\
Creates a new task. The summary field is required.\
```PATCH tasks/:id```\
Partially updates an existing task. Only the fields provided in the request body are updated.\
```DELETE tasks/:id```\
deletes a task by id

### Contributing
You are welcome to make any changes/improvement to this repository.To get started:

#### Fork the repository.
Create a new branch for your feature or fix:\
Commit your changes with a descriptive message:\
Push your branch and open a Pull Request:

#### Guidelines
Keep commits focused and and to the point.\
Update this README if you add new endpoints or change behaviour.\
Write clear Pull Request descriptions explaining the motivation and approach.

### Author & Acknowledgements
Author: Cynthia Otieno\
Acknowledgements
- Express.js: Web framework for Node.js.
- TypeScript: Typed superset of JavaScript for safer, more maintainable code.
- Node.js: JavaScript runtime powering the server.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit)
```bash
MIT License

Copyright (c) 2026 Cyntia Otieno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
