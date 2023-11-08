import { Form } from "react-router-dom";
import { UserPlusIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/bank_illustration.png";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of{" "}
          <span className="accent">
            Your Money
            <BanknotesIcon
              style={{ width: 50, marginLeft: 20, marginBottom: -10 }}
            />
          </span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;
