<script setup>
import { ref, computed, onMounted } from 'vue'
import Swal from 'sweetalert2' // Import do SweetAlert2
import BarraNav from './BarraNav.vue'

const user = ref({
  name: '',
  role: '',
  phone: '',
  email: '',
  about: '',
  image: null,
  skills: [],
  experiences: [],
  education: []
})

const newSkill = ref('')
const newExperience = ref({ local: '', funcao: '' })
const newEducation = ref({ instituicao: '', curso: '' })

const initials = computed(() => {
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

onMounted(() => {
  const saved = localStorage.getItem('perfil')
  if (saved) {
    user.value = JSON.parse(saved)
  }
})

function uploadImage(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      user.value.image = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function addSkill() {
  if (newSkill.value.trim()) {
    user.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function removeSkill(index) {
  user.value.skills.splice(index, 1)
}

function addExperience() {
  const { local, funcao } = newExperience.value
  if (local && funcao) {
    user.value.experiences.push({ ...newExperience.value })
    newExperience.value.local = ''
    newExperience.value.funcao = ''
  }
}

function removeExperience(index) {
  user.value.experiences.splice(index, 1)
}

function addEducation() {
  const { instituicao, curso } = newEducation.value
  if (instituicao && curso) {
    user.value.education.push({ ...newEducation.value })
    newEducation.value.instituicao = ''
    newEducation.value.curso = ''
  }
}

function removeEducation(index) {
  user.value.education.splice(index, 1)
}

function saveProfile() {
  localStorage.setItem('perfil', JSON.stringify(user.value))
  Swal.fire({ // substituição do alert
    icon: 'success',
    title: 'Sucesso!',
    text: 'Perfil salvo com sucesso!',
    confirmButtonColor: '#f47920'
  })
}

function excluirConta() {
  Swal.fire({ // substituição do confirm
    title: 'Tem certeza?',
    text: 'Essa ação irá excluir permanentemente seu perfil!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('perfil')
      location.reload()
    }
  })
}
</script>
