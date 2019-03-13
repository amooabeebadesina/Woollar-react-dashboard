// @flow

type LoginRequest = {
  email: string,
  password: string,
};

type CreateStoreRequest = {
  name: string,
  locations: Array<string>
}


export {
  LoginRequest,
  CreateStoreRequest,
};
