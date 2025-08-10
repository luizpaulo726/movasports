<template>
  <section class="flex flex-col min-h-screen items-center justify-center px-4 py-12 bg-gray-50">
    <div class="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-10">
      <!-- Título -->
      <h1 class="text-4xl font-bold text-[#8a8f6a] mb-12 text-center">
        Cadastro de Atleta
      </h1>

      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Nome -->
        <div class="col-span-1">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Nome completo</label>
          <input
              v-model="form.name"
              type="text"
              class="input-base"
              :class="{ 'input-error': v$.name.$error }"
          />
          <p v-if="v$.name.$error" class="text-red-500 text-sm mt-1">
            Nome deve ter pelo menos 3 caracteres
          </p>
        </div>

        <!-- Email -->
        <div class="col-span-1">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Email</label>
          <input
              v-model="form.email"
              type="email"
              class="input-base"
              :class="{ 'input-error': v$.email.$error }"
          />
          <p v-if="v$.email.$error" class="text-red-500 text-sm mt-1">
            Digite um email válido
          </p>
        </div>

        <!-- Data Nascimento -->
        <div class="col-span-1">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Data de Nascimento</label>
          <input
              v-model="form.data_nascimento"
              type="date"
              class="input-base"
              :class="{ 'input-error': v$.data_nascimento.$error }"
          />
          <p v-if="v$.data_nascimento.$error" class="text-red-500 text-sm mt-1">
            Informe a data
          </p>
        </div>

        <!-- Cidade (autocomplete) -->
        <div class="col-span-1 relative">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Cidade</label>

          <input
              id="cidade"
              v-model="form.cidade"
              @input="onCityInput"
              @keydown.down.prevent="onArrowDown"
              @keydown.up.prevent="onArrowUp"
              @keydown.enter.prevent="onEnter"
              @keydown.esc.prevent="onEsc"
              autocomplete="off"
              type="text"
              placeholder="Digite o nome da cidade"
              class="input-base"
              :class="{ 'input-error': v$.cidade.$error }"
          />

          <!-- sugestões -->
          <ul
              v-if="showSuggestions && filteredCities.length"
              class="absolute z-50 bg-white border rounded-lg w-full mt-1 max-h-56 overflow-auto shadow-lg"
          >
            <li
                v-for="(c, idx) in filteredCities"
                :key="c.id"
                @click="selectCity(c)"
                :class="[
                'px-4 py-2 cursor-pointer text-gray-700',
                idx === selectedIndex ? 'bg-gray-100' : 'hover:bg-gray-50'
              ]"
            >
              {{ c.nome }} - {{ c.microrregiao?.mesorregiao?.UF?.sigla || '' }} - Brasil
            </li>
          </ul>

          <p v-if="v$.cidade.$error" class="text-red-500 text-sm mt-1">
            {{ cidadeErrorMessage }}
          </p>
        </div>

        <!-- Senha -->
        <div class="col-span-1">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Senha</label>
          <input
              v-model="form.password"
              type="password"
              class="input-base"
              :class="{ 'input-error': v$.password.$error }"
          />
          <p v-if="v$.password.$error" class="text-red-500 text-sm mt-1">
            A senha deve ter pelo menos 6 caracteres
          </p>
        </div>

        <!-- Confirma senha -->
        <div class="col-span-1">
          <label class="block font-semibold mb-2 text-[#8a8f6a]">Confirmar senha</label>
          <input
              v-model="form.confirma_password"
              type="password"
              class="input-base"
              :class="{ 'input-error': v$.confirma_password.$error }"
          />
          <p v-if="v$.confirma_password.$error" class="text-red-500 text-sm mt-1">
            As senhas devem ser iguais
          </p>
        </div>

        <!-- Checkbox de privacidade -->
        <div class="col-span-1 md:col-span-2 flex items-center space-x-2">
          <input
              id="termos_aceitos_em"
              type="checkbox"
              v-model="form.termos_aceitos_em"
              :class="{ 'border-red-500': v$.termos_aceitos_em.$error }"
          />
          <label for="termos_aceitos_em" class="text-[#8a8f6a] text-sm">
            Li e aceito a
            <button
                type="button"
                @click="showModal = true"
                class="text-[#8a8f6a] underline hover:text-[#73775a] focus:outline-none"
            >
              política de privacidade e os termos
            </button>
          </label>
        </div>
        <p v-if="v$.termos_aceitos_em.$error" class="col-span-1 md:col-span-2 text-red-500 text-sm mt-1">
          Você precisa aceitar os termos antes de continuar.
        </p>

        <!-- Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="showModal = false"
        >
          <div class="bg-white rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto p-6 relative">
            <h2 class="text-2xl font-bold mb-4">Política de Privacidade e Termos de Uso</h2>

            <p>
              No Mova Sports, respeitamos a sua privacidade e estamos comprometidos em proteger seus dados pessoais.
            </p>

            <h3 class="font-semibold mt-4">1. Dados que coletamos</h3>
            <p>
              Coletamos informações como seu nome completo e email para viabilizar seu cadastro na plataforma e sua participação nos eventos esportivos.
            </p>

            <h3 class="font-semibold mt-4">2. Uso dos dados</h3>
            <p>
              As informações coletadas são usadas para:
            </p>
            <ul class="list-disc list-inside">
              <li>Registrar corretamente sua inscrição nos eventos;</li>
              <li>Enviar comunicados e informações importantes sobre as provas em que você está inscrito, incluindo local, horário, alterações e resultados;</li>
              <li>Garantir a organização eficiente dos eventos e o atendimento adequado aos participantes.</li>
            </ul>
            <p>
              Seus dados não serão compartilhados com terceiros para fins comerciais e serão utilizados exclusivamente para os propósitos relacionados aos eventos esportivos.
            </p>

            <h3 class="font-semibold mt-4">3. Segurança</h3>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração.
            </p>

            <h3 class="font-semibold mt-4">4. Seus direitos</h3>
            <p>
              Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento entrando em contato conosco.
            </p>

            <h3 class="font-semibold mt-4">5. Aceitação</h3>
            <p>
              Ao aceitar estes termos, você concorda com o tratamento dos seus dados conforme descrito nesta política.
            </p>

            <h3 class="font-semibold mt-4">6. Contato</h3>
            <p>
              Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo email: <a href="mailto:contato@movasports.com.br" class="text-[#8a8f6a] underline">contato@movasports.com.br</a>.
            </p>

            <button
                @click="showModal = false"
                class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Fechar modal"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Botão -->
        <div class="col-span-1 md:col-span-2">
          <button
              type="submit"
              class="w-full bg-[#8a8f6a] text-white py-4 rounded-lg font-semibold hover:bg-[#73775a] transition-all"
          >
            Salvar Cadastro
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.input-base {
  @apply w-full border border-gray-300 rounded-lg px-5 py-3 text-lg outline-none transition focus:border-[#8a8f6a] focus:ring-2 focus:ring-[#8a8f6a] bg-white;
}
.input-error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-500;
}
</style>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import { cadastrarUsuario } from '@/services/atleta.service.js' // mantenha sua função de API

// formulário (inclui cidade_id para enviar o id IBGE)
const form = reactive({
  name: '',
  email: '',
  data_nascimento: '',
  cidade: '', // campo de exibição (texto)
  cidade_id: null, // id IBGE (usado no backend)
  password: '',
  confirma_password: '',
  termos_aceitos_em: false, // novo campo para checkbox
})

// validações (cidade exige seleção da lista)
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  data_nascimento: { required },
  cidade: {
    required,
    cidadeValida: helpers.withMessage('Selecione uma cidade válida da lista', () => !!form.cidade_id),
  },
  password: { required, minLength: minLength(6) },
  confirma_password: {
    required,
    sameAsPassword: sameAs(computed(() => form.password)),
  },
  termos_aceitos_em: {
    accepted: helpers.withMessage('Você precisa aceitar os termos antes de continuar.', (value) => value === true),
  },
}

const showModal = ref(false)

const v$ = useVuelidate(rules, form)

// cidades (carregadas do IBGE)
const cidades = ref([])

// controlar sugestões e navegação por teclado
const showSuggestions = ref(false)
const selectedIndex = ref(-1)
const debounceTimer = ref(null)

const cidadeErrorMessage = computed(() => {
  if (!v$.value.cidade.required.$response) return 'Selecione a cidade'
  if (!v$.value.cidade.cidadeValida.$response) return 'Selecione uma cidade válida da lista'
  return ''
})

// busca todas as cidades do IBGE (uma só vez)
const fetchCidades = async () => {
  try {
    const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
    const data = await res.json()
    data.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
    cidades.value = data
  } catch (err) {
    console.error('Erro ao carregar cidades IBGE:', err)
  }
}

onMounted(() => {
  fetchCidades()
})

// filtro reativo (aplica-se só quando digitar >= 2 chars)
const filteredCities = computed(() => {
  const q = (form.cidade || '').trim().toLowerCase()
  if (q.length < 2) return []
  return cidades.value.filter((c) => c.nome.toLowerCase().includes(q)).slice(0, 10)
})

// quando o usuário digita na cidade: limpa seleção anterior e abre sugestões (debounce visual)
function onCityInput() {
  if (form.cidade_id) {
    form.cidade_id = null
  }

  clearTimeout(debounceTimer.value)
  debounceTimer.value = setTimeout(() => {
    showSuggestions.value =
        form.cidade && form.cidade.trim().length >= 2 && filteredCities.value.length > 0
    selectedIndex.value = -1
  }, 150)
}

// selecionar cidade da lista
function selectCity(c) {
  const sigla = c.microrregiao?.mesorregiao?.UF?.sigla || ''
  form.cidade = `${c.nome} - ${sigla} - Brasil`
  form.cidade_id = c.id
  showSuggestions.value = false
  selectedIndex.value = -1
}

// teclado: setas e enter
function onArrowDown() {
  if (!filteredCities.value.length) return
  selectedIndex.value = Math.min(selectedIndex.value + 1, filteredCities.value.length - 1)
  showSuggestions.value = true
}
function onArrowUp() {
  if (!filteredCities.value.length) return
  selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
}
function onEnter() {
  if (selectedIndex.value >= 0 && filteredCities.value[selectedIndex.value]) {
    selectCity(filteredCities.value[selectedIndex.value])
  } else {
    showSuggestions.value = false
  }
}
function onEsc() {
  showSuggestions.value = false
}

// fechar sugestões se clicar fora (melhora UX)
const handleClickOutside = (e) => {
  const el = document.getElementById('cidade')
  if (!el) return
  const inInput = el.contains(e.target)
  if (!inInput) showSuggestions.value = false
}
document.addEventListener('click', handleClickOutside)

// submit
const handleSubmit = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) {
    console.log('Form inválido!')
    return
  }

  try {
    const response = await cadastrarUsuario(form)

    alert('Cadastro realizado com sucesso!')
    console.log('Resposta:', response.data)

    // Se quiser limpar o formulário:
    // Object.keys(form).forEach(key => form[key] = '')
  } catch (error) {
    if (error.response) {
      const status = error.response.status
      const data = error.response.data

      if (status === 422 && data.errors) {
        const mensagens = Object.values(data.errors).flat().join('\n')
        alert(`Erros no formulário:\n${mensagens}`)
      } else if (status === 500) {
        alert('Erro interno no servidor. Tente novamente mais tarde.')
        console.error('Erro 500:', data.error || data.message)
      } else {
        alert(data.message || 'Erro ao enviar o formulário.')
        console.error('Erro desconhecido:', data)
      }
    } else {
      alert('Erro de conexão. Verifique sua internet ou tente mais tarde.')
      console.error('Erro de rede:', error)
    }
  }
}
</script>
