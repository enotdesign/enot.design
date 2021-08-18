<template>
  <section id="contacto" class="py-14">
    <div class="container">

      <div class="wrapper bg-thirtbg border-bordercolor px-10 py-14 rounded-lg">

        <div class="text text-center pb-10">
          <p class="text-3xl font-bold">¿Listo para empezar?</p>
          <span>Estare comunicandome en menos de 8 hrs!!</span>
        </div>

        <form class="flex flex-col">

          <div class="field gap-2 md:gap-0 flex-col md:flex-row">
            <div class="form-control">
              <input type="text" class="enot-form bg-form" placeholder="Nombre">
              <i class='bx bxs-user'></i>
            </div>
            <div class="form-control">
              <input type="mail" class="enot-form bg-form" placeholder="Email">
              <i class='bx bx-mail-send'></i>
            </div>
          </div>

          <div class="field gap-2 md:gap-0 flex-col md:flex-row">
            <div class="form-control">
              <input type="tel" class="enot-form bg-form" placeholder="Telefono">
              <i class='bx bxs-phone'></i>
            </div>
            <div class="form-control">
              <input type="text" class="enot-form bg-form" placeholder="Website">
              <i class='bx bx-globe'></i>
            </div>
          </div>

          <div class="message">
            <textarea class="enot-form bg-form" name="message" placeholder="Enter Message"></textarea>
            <i class='bx bxs-message-rounded-dots'></i>
          </div>


          <input type="submit" class="cursor-pointer mt-6 bg-lightblue hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded" value="Enviar">
        </form>

      </div>

    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.bg-form {
  background-color: #0f2435;
}
.wrapper .field {
  width: 100%;
  display: flex;
  /* gap:20px; */
  justify-content: space-between;
  margin-bottom: 2rem;
}

.form-control {
  position: relative;
  width: 100%;
}

.wrapper .form-control:not(:last-child) {
  margin-right: 1rem;
}
.form-control i {
  position: absolute;
  top: 50%;
  left: 1rem;
  font-size: 1.3rem;
  transform: translateY(-50%);
  color: #00B6FF;
  pointer-events: none;
}

.wrapper .message i{
  position: absolute;
  top: 1.3rem;
  left: 1.3rem;
  font-size: 1.6rem;
  color: #00B6FF;
  pointer-events: none;
}

.wrapper .message{
  position: relative;
}

.wrapper .message textarea{
  min-height: 9rem;
  text-indent: 4rem;
  padding: 1rem 0;
  /* Resise vertical para que el text area no se achique solo se manipule de forma vertical */
  resize: vertical;
}

.wrapper .form-control input, textarea {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #1f384e;
  /* border-radius: 5px; */
  padding: 1rem;
  text-indent: 2rem;

}


</style>