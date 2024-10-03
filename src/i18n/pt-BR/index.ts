export default {
  failed: 'Falha ao executar ação.',
  success: 'Ação concluída com sucesso.',
  confirm: {
    title: 'Confirmação obrigatória',
    question: 'Tem certeza que deseja executar essa ação?',
    cancel: 'Cancelar',
    ok: 'Sim',
  },
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
      formForgotPassword: {
        email: 'E-mail',
        reset: 'Enviar',
      },
      formResetPassword: {
        password: 'Senha',
        passwordConfirmation: 'Confirmar senha',
        save: 'Salvar',
      },
      formUser: {
        name: 'Nome',
        email: 'E-mail',
        save: 'Salvar',
        clear: 'Limpar',
      },
      updatePasswordForm: {
        currentPassword: 'Senha atual',
        newPassword: 'Nova senha',
        passwordConfirmation: 'Confirmar senha',
        save: 'Salvar',
        clear: 'Limpar',
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
          deleteConfirmation:
            'Essa ação irá remover todos as fotos/videos dessa timeline. Está certo disso?',
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
      forgotPassword: {
        title: 'Recuperar senha',
        message: 'Por favor, insira seu endereço de e-mail.',
        email: 'E-mail',
        reset: 'Enviar',
        remember: 'Lembrou a senha?',
        signin: 'Entrar',
      },
      resetPasswordConfirmation: {
        title: 'Recuperar senha',
        message:
          'Enviamos uma mensagem para seu endereço de e-mail. Por favor, verifique seu e-mail.',
        emailNotSent: 'Não recebeu nenhum e-mail?',
        resend: 'Reenviar',
        backToLogin: 'Voltar para login',
      },
      resetPassword: {
        title: 'Criar nova senha',
        message: 'Por favor, digite sua nova senha.',
        save: 'Salvar',
        remember: 'Lembrou a senha?',
        signin: 'Entrar',
        messageSuccess:
          'Senha alterada com successo. Você será redirecionado para a página de login em: ',
        seconds: '{seconds} segundos(s)',
      },
      user: {
        profile: {
          goBack: 'Voltar',
          infoTitle: 'Informações pessoais',
          updatePasswordTitle: 'Alterar Senha',
          sigature: 'Minha Assinatura',
          signatureInfo:
            "Atualmente você está utilizando a assinatura <span class='text-uppercase text-weight-bold'>{signature}</span>",
          history: 'Histórico',
          adquiredSignature:
            "Adquiriu assinatura <span class='text-uppercase text-weight-bold'>{signature}</span> de <span class='text-uppercase text-weight-bold'>{size}</span> por <span class='text-uppercase text-weight-bold'>{price}</span>",
          labelSlider: 'Espaço disponível:',
          upgrade: 'Fazer upgrade',
          cancelSignature: 'Cancelar Assinatura',
          accountTitle: 'Minha conta',
          deleteAccountInfo:
            "Se você optar em excluir sua conta, todos os seus dados e fotos/vídeos serão <span class='text-uppercase text-weight-bold'>excluídos</span> da nossa base de dados. Você <span class='text-uppercase text-weight-bold'>não terá mais acesso à plataforma</span> e não será possível <span class='text-uppercase text-weight-bold'>recuperar seus dados novamente</span>.",
          btnDelete: 'ESTOU CIENTE, Excluir minha conta',
          deleteConfirmation:
            'Ao validar essa ação todos as suas fotos/videos serão excluídos permanentemente.',
        },
      },
    },
  },
};
