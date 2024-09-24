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
    },
  },
};
