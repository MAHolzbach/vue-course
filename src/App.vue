<!--<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password"
            >
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age"
            >
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"
              > Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"
              > Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"
            > Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"
            > Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority"
          >
            <option
              :key="priority"
              v-for="priority in priorities"
            >{{priority}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted"
          >Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div
      class="row"
      v-if="isSubmitted"
    >
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password:{{userData.password}}</p>
            <p>Age:{{userData.age}}</p>
            <p style="white-space:pre">Message: {{message}}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li
                :key="item"
                v-for="item in sendMail"
              >{{item}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selectedPriority}}</p>
            <p>Switched: {{dataSwitch}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 39
      },
      message: "Your comments...",
      sendMail: [],
      gender: "Male",
      selectedPriority: "High",
      priorities: ["High", "Medium", "Low"],
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>-->

<template>
  <div class="container">
    <form>
      <div
        class="row"
        v-if="!isSubmitted"
      >
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <full-name v-model="fullName"></full-name>
            <!-- <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="name"
            > -->
            <label for="name">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="email"
            >
            <label for="name">Password</label>
            <input
              type="text"
              id="password"
              class="form-control"
              v-model="password"
            >
            <label for="">Store Data?
              <label for="yes">Yes
                <input
                  type="radio"
                  value="yes"
                  id="storeDataYes"
                  v-model="storeData"
                >
              </label>
              <label for="no">No
                <input
                  type="radio"
                  value="no"
                  id="storeDataNo"
                  v-model="storeData"
                >
              </label>
            </label>
          </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button
              class="btn btn-primary"
              @click.prevent="submitted"
            >Submit!
            </button>
          </div>
        </div>
      </div>
    </form>
    <hr>
    <div
      class="row"
      v-if="isSubmitted"
    >
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail: {{email}} </p>
            <p>Password: {{password}} </p>
            <p>Store in Database?: {{storeData}} </p>
            <button
              class="btn btn-warning"
              @click.prevent="submitted"
            >Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";
export default {
  data() {
    return {
      fullName: "Mike Holzbach",
      email: "",
      password: "",
      storeData: "no",
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = !this.isSubmitted;
    }
  },
  components: {
    fullName: FullName
  }
};
</script>

<style>
</style>

