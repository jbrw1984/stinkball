import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { CreateUserDto } from "../../../api/src/dtos/users.dto";

const UserModel = types.model("User", {
  id: types.identifier,
  email: types.string,
  password: types.string,
  cookie: types.optional(types.string, ""),
});

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore")
  .props({
    users: types.map(UserModel),
  })
  .actions((self) => ({
    addUser(userSnapshot: any) {
      const user = UserModel.create(userSnapshot);
      self.users.put(user);
    }
  }))
  .actions((self) => ({
    login: flow(function* (email: string, password: string) {
      const apiUrl = `http://localhost:3000/login`;
      const user: CreateUserDto = {
        email: email,
        password: password,
      }

      try {
        const response = yield fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) throw new Error('Network response was not ok');
        

        const data = yield response.json();
        console.log(data);
        const userSnapshot = { id: String(data.id), email, password, cookie: data.cookie }
        self.addUser(userSnapshot);
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    })
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
