

<div class='login'>
    <h1>Welcome to MyProstate</h1>
    <h3>A Personal Health Journal</h3>

<form>
    <fieldset>
      <input type="text" placeholder="username" id="userNameField">
        <input type="password" placeholder="password" id="passwordField">
    <div>
      <input class="button-primary" type="submit" formaction="/home"value="Login">
      <input class="button-outline" type="submit" formaction="/signup"value="Create Account">
    </div>
    </fieldset>
  </form>
</div>

<style>
    .login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .button-primary {
        width: 100%;
        background-color: #2e6adb;
        border: 0.1rem solid #2e6adb;
    }
    .button-outline {
        width: 100%;
        border: 0.1rem solid #2e6adb;
        color: #2e6adb;
    }
</style>