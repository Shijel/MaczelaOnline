import Cart from "../../Cart";
import { getCurrentUser } from "@utils/users";
import Client from "./Client";

export const dynamic = "force-dynamic";

export default async function UserAuth({ hideCart = false, cartStyles = "" }) {
  const user = await getCurrentUser();

  return (
    <>
      <Client user={user} />
      {!hideCart ? <Cart styles={cartStyles} /> : null}
    </>
  );
}
