import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { CreateUserDto } from "../../../api/src/dtos/users.dto";

const UserModel = types.model("User", {
  id: types.identifier,
  email: types.string,
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

      // Call API
      const response = yield fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error('Invalid email or password. Please try again.');
      
      // Extract data. Create snapshot and addUser to state tree.
      const data = yield response.json();
      const userSnapshot = { id: String(data.id), email, cookie: data.cookie }
      self.addUser(userSnapshot);
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
