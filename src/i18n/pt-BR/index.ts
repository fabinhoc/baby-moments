export default {
  failed: 'Falha',
  success: 'Sucesso',
  validations: {
    required: 'Este campo é obrigatório',
    string: 'Este campo não pode ser numérico',
    number: 'Este campo deve ser numério',
    email: 'Este campo deve conter um e-mail válido',
    minLength: {
      number: 'Este campo deve ser pelo menos {minLength}',
      string: 'Este campo deve ter pelo menos {minLength} caracteres',
    },
    passwordConfirmation: 'Senha e confirmação de senha não conferem',
    date: 'Data inválida',
  },
  app: {
    components: {
      timelineForm: {
        title: 'Título',
        description: 'Descrição',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      btnConfig: {
        labelSlider: 'Espaço Disponível',
        doUpgrade: 'Fazer Upgrade!',
      },
      btnUser: {
        edit: 'Editar',
        signature: 'Minha assinatura',
        logout: 'Sair',
      },
      momentForm: {
        title: 'Título',
        description: 'Descrição',
        avatar: 'Imagem destaque',
        save: 'Salvar',
        cancel: 'Cancelar',
        theme: 'Tema',
        position: 'Ordem',
        positionHint:
          'Adicione ordem de posição em que o momento será visualiado na linha do tempo. Ex: 1,2,3,4...',
      },
      tableMoments: {
        title: 'Título',
        avatar: 'Avatar',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        description: 'Descrição',
        theme: 'Tema',
        actions: 'Ações',
        photo: 'Foto | Fotos',
        video: 'Vídeo | Vídeos',
        edit: 'Editar',
        remove: 'Remover',
      },
      formLogin: {
        email: 'E-mail',
        password: 'Senha',
        login: 'Entrar',
      },
    },
    pages: {
      timeline: {
        edit: {
          title: 'Editar Timeline',
          goBack: 'Voltar',
          moment: 'Momento | Momentos',
        },
        new: {
          title: 'Nova Timeline',
          goBack: 'Voltar',
        },
        list: {
          title: 'Minhas timelines',
          remove: 'Remover',
          add: 'Adicionar novo',
          edit: 'Editar',
          addMoment: 'Adcionar momentos',
        },
        view: {},
      },
      moment: {
        edit: {
          title: 'Editar Momento',
          goBack: 'Voltar',
        },
        new: {
          title: 'Adicionar Momento',
          goBack: 'Voltar',
        },
      },
      index: {},
      album: {
        save: {
          goBack: 'Voltar',
          title: 'Álbum de fotos/vídeos',
        },
      },
      login: {
        forgotPassword: 'Esqueceu sua senha?',
        createAccount: 'Criar uma conta',
      },
      emailVerification: {
        title: 'Verifique seu e-mail',
        message: 'Enviamos um e-mail de verificação para {email}',
        checkIt: 'Por favor, verifique seu e-mail',
        notReceivedYet: 'Não recebeu nenhum e-mail?',
        resend: 'Reenviar',
        gotoLogin: 'Voltar para login',
      },
      verify: {
        backToLogin: 'Voltar para a página de login',
        responseOk:
          'E-mail verificado com sucesso! Acesse a página de login novamente.',
      },
      errorNotFound: {
        message: 'Oops. Nada por aqui...',
        goHome: 'Voltar para página principal',
      },
    },
  },
};
