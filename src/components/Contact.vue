<template>
  <div class="container">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center white--text text-uppercase mb-0">Contact Me</h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Contact Section Form-->
    <v-form v-model="valid" ref="contactForm">
      <v-container>
        <v-row class="d-flex flex-column">
          <v-col cols="6" offset="3">
            <v-text-field
              ref="nameField"
              dark
              v-model="fullName"
              :rules="nameRules"
              label="Full name"
              required
            ></v-text-field>
            <v-text-field
              ref="emailField"
              dark
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              ref="phoneField"
              dark
              v-model="phone"
              :rules="phoneRules"
              label="Phone Number"
            ></v-text-field>
            <v-textarea dark outlined v-model="message" label="Message Me"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn large color="primary" @click="submitForm($event)">Submit</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-snackbar bottom :color="snackbarColor" v-model="showSnackbar">
            {{ snackbarText }}
            <v-btn color="black" text @click="showSnackbar = false">Close</v-btn>
          </v-snackbar>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import "../assets/css/divider.css";
import "../assets/css/section.css";
import formSubmit from "../mixins/formSubmit";
export default {
  name: "Contact",
  mixins: [formSubmit],
  data: () => ({
    valid: false,
    fullName: "",
    nameRules: [v => (!!v && v.trim() !== "") || "Name is required"],
    email: "",
    emailRules: [
      v => (!!v && v.trim() !== "") || "E-mail is required",
      v => /[^@\s]+@[^\.]+\..+/.test(v) || "E-mail must be valid"
    ],
    phone: "",
    phoneRules: [
      v =>
        /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/.test(v) ||
        "Must be Israeli home or mobile phone number"
    ],
    message: "",
    snackbarText: "",
    showSnackbar: false,
    snackbarColor: ""
  }),
  methods: {
    submitForm($event) {
      if (this.$refs.contactForm.validate()) {
        const data = {
          name: this.fullName,
          phone: this.phone,
          email: this.email,
          message: this.message
        };
        this.toFormSpreeIo("mayddwvd", data)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error("Something went wrong on formSpree server!");
            }
          })
          .then(response => {
            if (response.ok) {
              this.snackbarColor = "success";
              this.snackbarText = `${this.fullName}, Thank You for contacting me, I will respond ASAP :)`;
              this.showSnackbar = true;
            } else {
              throw new Error(response);
            }
          })
          .catch(error => {
            this.snackbarColor = "danger";
            this.snackbarText = `${this.fullName}, Something went wrong with sending this form. Try reaching me via LinkedIn, instead. :)`;
            this.showSnackbar = true;
            console.error(error);
          });
      }
    }
  }
};
</script>
<style scoped>
</style>