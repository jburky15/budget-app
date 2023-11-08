/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

// helper functions
import { createBudget, fetchData, wait } from "../helpers";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
  await wait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (err) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "newBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success(`New Budget, ${values.newBudget}, created`);
    } catch (err) {
      throw new Error("There was a problem creating a new budget!");
    }
  }
}
const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/*budgets ? () : ()*/}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
