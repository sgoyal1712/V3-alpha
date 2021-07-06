import GenerateRequest from './resources';
const req = GenerateRequest();

export default {
  async getList(params) {
    return (await req.get('/', { params })).data;
  },
}