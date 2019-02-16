import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const Home = {
  nameSpaced: true,
  state: {
    title: "Welcome to Taiga's Page",
    myProfileImage: require('@/assets/gutty.png'),
    accounts: [
      {
        stackClass: '',
        iconClasses: ['fab fa-facebook fa-2x'],
        url: 'https://www.facebook.com/mikamitaiga60'
      },
      {
        stackClass: '',
        iconClasses: ['fab fa-github fa-2x'],
        url: 'https://github.com/TaigaMikami'
      },
      {
        stackClass: 'fa-stack',
        iconClasses: [
          'fa fa-square fa-stack-2x',
          'fa fa-search fa-stack-1x fa-inverse fa-2x'
        ],
        url: 'https://qiita.com'
      },
      {
        stackClass: '',
        iconClasses: ['fas fa-address-book fa-2x'],
        url: 'https://www.wantedly.com/users/19047008'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state) {
      return state.title
    },
    getMyProfileImage (state) {
      return state.myProfileImage
    },
    getAccounts (state) {
      return state.accounts
    }
  }
}

const Skill = {
  nameSpaced: true,
  state: {
    skills: [
      {
        category: 'Web Development',
        contents: ['Ruby', 'Ruby on Rails', 'Python', 'Django', 'JavaScript', 'Vue,js', 'HTML', 'CSS', 'AWS', 'Heroku']
      },
      {
        category: 'iOS Development',
        contents: ['Swift', 'Firebase']
      },
      {
        category: 'Deep Learning ちょっと',
        contents: ['Keras', 'Chainer']
      },
      {
        category: 'Others',
        contents: ['Git', 'GitHub', 'Slack4段', 'Google App Script', 'Netlify', 'Java', 'C', 'C++']
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSkills (state) {
      return state.skills
    }
  }
}

const Works = {
  nameSpaced: true,
  state: {
    works: [
      {
        title: 'MKK (Manage Kasi Kari)',
        imgSrc: require('@/assets/works/mkk/mkk.png'),
        subImgSrcs: [require('@/assets/works/mkk/item.png'), require('@/assets/works/mkk/kasikari.png'), require('@/assets/works/mkk/timeline.png')],
        tags: ['Ruby', 'Ruby on Rails', 'JavaScript', 'jQuery'],
        date: 'March 2017',
        txt: '貸し借りのSNS学生は、ノートやお金、テストの過去問、ゲームなど友人間の貸し借りが多く行われる。しかし、その貸し借りは口約束であるため「借りっぱなし」や「貸しっぱなし」が起きてしまう。これを管理する。また、貸し借りのSNSであるため、他人の貸し借りをタイムラインにより覗くことが可能である。これによって物の貸し借りの促進を図る。',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/manage_kasikari'
      },
      {
        title: 'FoodieDB',
        imgSrc: require('@/assets/works/foodie/foodei1.png'),
        subImgSrcs: [require('@/assets/works/foodie/foodie2.png'), require('@/assets/works/foodie/foodie3.png')],
        tags: ['Ruby', 'Ruby on Rails'],
        date: 'October 2017',
        txt: 'フォトジェニックな料理を載せるための食べ物図鑑SNS。食べ物名、コメント、☆☆☆☆☆の評価、GoogleMap APIを用いた食べた場所登録、いいね機能などがある Ruby on Rails 5.0.6で作成',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/FoodieDB'
      },
      {
        title: 'Weather Alarm',
        imgSrc: require('@/assets/works/weather_alarm/weather_alarm.png'),
        subImgSrcs: [],
        tags: ['Swift3', 'iOS'],
        date: '2018-2-20',
        txt: '朝起きるときに、いつものアラーム音は不快であるため、今日の「天気」と「気温」をアラーム音の代わりに音声で提供してくれるiOSアプリケーション',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/WeatherAlarm'
      },
      {
        title: 'LoveLove Diagnosis',
        imgSrc: require('@/assets/works/love/love_h.png'),
        subImgSrcs: [require('@/assets/works/love/love.png')],
        tags: ['Ruby', 'Ruby on Rails', 'Azure', 'Azure Emotion API'],
        date: 'October 2017',
        txt: '彼女とのツーショット写真を撮ったあなた…。彼女は本当に今日のデート楽しかったのか…？ 好きな子とツーショット撮ったあなた…。本当はその子も君のことが好きなのかもしれない。 気になっている子とツーショットを撮ったあなた…。その気持ちはなんなのか！？ そんな人たちへ人工知能で相手の本当の気持ちを知りたくないですか？',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/LoveLoveDiagnosis'
      },
      {
        title: 'MICHIKUSA',
        imgSrc: require('@/assets/works/michikusa/michikusa.png'),
        subImgSrcs: [require('@/assets/works/michikusa/top.png'), require('@/assets/works/michikusa/index.png'), require('@/assets/works/michikusa/spot1.png'), require('@/assets/works/michikusa/spot2.png')],
        tags: ['Ruby on Rails', 'Python(Word2Vec)', 'GoogleMap API', 'Twitter API', '東京公共交通オープンデータチャレンジAPI(駅データ)'],
        date: '2018-2-20',
        txt: '「初めての土地でどこへ行けば行けばわからない」、「目的地への到着までに時間が余ってしまった」など誰しもが経験する問題があります。そのような問題に直面した際にMICHIKUSAがあれば解決する手助けをしてくれます。 MICHIKUSAには出発駅と目的駅の2つを入力するだけで、その各経路駅の周辺の観光地を機械学習とSNSのクローリングによってレコメンドしてくれます。',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/ODCTokyo'
      },
      {
        title: 'Voice Note',
        imgSrc: require('@/assets/works/voice_note/voice_note.png'),
        subImgSrcs: [require('@/assets/works/voice_note/note.png')],
        tags: ['Ruby on Rails', 'Web Speech API'],
        date: '2018-2-20',
        txt: '音認開始ボタンを押下することでノートの記録が開始する。ファイルアップローダーに授業で撮影した画像などをアップロードする。Postボタンでノート記録をアップロードする ',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/VoiceNote_beta'
      },
      {
        title: 'Vision-Lab Library DB',
        imgSrc: require('@/assets/works/v-lib/vision-lib.png'),
        subImgSrcs: [require('@/assets/works/v-lib/vision-lib2.png'), require('@/assets/works/v-lib/vision-lib3.png')],
        tags: ['Ruby on Rails', 'GoogleBooks API'],
        date: '2018-2-20',
        txt: '研究室用に作成した書籍データベース。研究室に本が多いので、なんの本があるかわからなかったので作成。 Google Books Apiを用いてisbn・バーコードリーダーで書籍を登録。 登録した書籍は本棚のようなデザインの一覧ページで確認可能。 自分の探している本を最適化するための検索機能もReact.jsにより実装',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/VisionLabBookDB'
      },
      {
        title: 'Ancestor Judgment',
        imgSrc: require('@/assets/works/ancestor_AI/ai.png'),
        subImgSrcs: [require('@/assets/works/ancestor_AI/data.png'), require('@/assets/works/ancestor_AI/graph.png')],
        tags: ['Flask', 'Python', 'keras', 'TensorFlow'],
        date: '2018-2-20',
        txt: '先祖分類アプリケーション。Face Placeのface databaseを用いた先祖を判別するWebアプリケーション。深層学習を研究している研究室に在籍している訳ではないが、面白そうなデータセットがあったため作成したアプリケーションです。' +
          'Asian \n' +
          'Caucasian \n' +
          'Hispanic \n' +
          'Multiracial \n' +
          'Black \n' +
          'を分類します。',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/Ancestor_judgment'
      },
      {
        title: 'code road',
        imgSrc: require('@/assets/works/coderoad/coderoad.png'),
        subImgSrcs: [],
        tags: ['Ruby on Rails'],
        date: '2018-2-20',
        txt: '技術的なチュートリアルサイトを集めたwebアプリ',
        urlTitle: '詳細',
        url: 'http://coderoad-rails.herokuapp.com/'
      },
      {
        title: 'yorumac',
        imgSrc: require('@/assets/works/chatbot/yorumac.png'),
        subImgSrcs: [],
        tags: ['Python', '知話輪', 'Flask', 'TensorFlow'],
        date: '2018-2-20',
        txt: 'DreamArtsのインターンで作ったAI Bot。部下のWeeklyReportから上司が作成するWeeklyReportのサマリーを作成するBot。知話輪に部署を入力するとその部署のWeeklyReportを作成する',
        urlTitle: '詳細',
        url: 'https://github.com/DreamArtsChiwawa/YoruMac'
      },
      {
        title: 'クーポンマシマシ',
        imgSrc: require('@/assets/works/jiro/jiro.png'),
        subImgSrcs: [require('@/assets/works/jiro/jiro2.png'), require('@/assets/works/jiro/jiro3.png')],
        tags: ['Ruby on Rails', 'Flask', 'TensorFlow', 'keras', 'Twitter API'],
        date: '2018-2-20',
        txt: '「クーポンマシマシ」🍜ジロッカソンで優勝したアプリケーションSNSにシェアされた二郎の写真をAIで評価。 フォトジェニック度合いに応じて、クーポンの割引価格を決定。 普段やっている、写真を撮影してSNSに投稿する行為に報酬がついてくる！ きれいな写真を取るほど、割引率がマシ、お店側も質のよい写真で 宣伝出来るという両者にWin&Winなアプリケーション',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/JiroHack'
      },
      {
        title: 'ヒデンノレシピ',
        imgSrc: require('@/assets/works/hidenorecipe/hiden.png'),
        subImgSrcs: [require('@/assets/works/hidenorecipe/recipe.png')],
        tags: ['Ruby on Rails', 'Adobe XD'],
        date: '2018-2-20',
        txt: 'Cookpadのインターン「サービス開発コース」で開発したアプリケーション。あえてレシピを隠すことで友人と料理を作成し楽しむ',
        urlTitle: '詳細',
        url: 'https://github.com/TaigaMikami/cookpad_hide_recipe_game'
      },
      {
        title: 'ばえるーポン',
        imgSrc: require('@/assets/works/baerupon/start.png'),
        subImgSrcs: [require('@/assets/works/baerupon/list.png'), require('@/assets/works/baerupon/map.png'), require('@/assets/works/baerupon/coupon.png')],
        tags: ['Swift4', 'Ruby on Rails', 'Pytorch', 'keras', 'Flask', 'Twitter API'],
        date: '2018-2-20',
        txt: '「ばえるーポン」は食べ物の写真のインスタ映え度を深層学習で自動的に判定し、その評価に応じて割引クーポンを発行するサービスです',
        urlTitle: '詳細',
        url: 'https://www.youtube.com/watch?v=5-lMbg_ud0s&feature=youtu.be&list=PLvb1WfRXGO-A183MkEAhhvD_K2jIWFQc5'
      },
      {
        title: 'Comparison of skin brightness',
        imgSrc: require('@/assets/works/faceexp/faceexp.png'),
        subImgSrcs: [],
        tags: ['Ruby on Rails', 'jQuery'],
        date: '2018-2-20',
        txt: '肌の明るさ比較のグローバル比較',
        urlTitle: '詳細',
        url: ''
      },
      {
        title: '日報スカウター',
        imgSrc: require('@/assets/works/dbbp/dbbp.png'),
        subImgSrcs: [],
        tags: ['Ruby on Rails', 'Flask', 'mecab', 'なんちゃって機械学習'],
        date: '2018-2-20',
        txt: '社会人になると日々書く日報を自然言語処理し、それぞれの日報の戦闘力を可視化する',
        urlTitle: '詳細',
        url: ''
      },
    ],
    isShow: false
  },
  mutations: {
    show (state) {
      state.isShow = true
    },
    hide (state) {
      state.isShow = false
    }
  },
  actions: {
    showModal ({ state, commit }, id) {
      commit('show')
      commit('setModalInfo', state.works[id])
    },
    hideModal ({ commit }) {
      commit('hide')
    }
  },
  getters: {
    getWorks (state) {
      return state.works
    },
    getModalShow (state) {
      return state.isShow
    }
  }
}

const Modal = {
  nameSpaced: true,
  state: {
    modalInfo: {
      title: '',
      date: '',
      text: '',
      imgSrc: '',
      subImgSrcs: [],
      urlTitle: '',
      url: ''
    }
  },
  mutations: {
    setModalInfo (state, workInfo) {
      state.modalInfo.title = workInfo.title
      state.modalInfo.date = workInfo.date
      state.modalInfo.text = workInfo.txt
      state.modalInfo.imgSrc = workInfo.imgSrc
      state.modalInfo.subImgSrcs = workInfo.subImgSrcs
      state.modalInfo.url = workInfo.url
      state.modalInfo.urlTitle = workInfo.urlTitle
    }
  },
  actions: {},
  getters: {
    getModalInfo (state) {
      return state.modalInfo
    }
  }
}

const Gallery = {
  nameSpaced: true,
  state: {
    galleries: [
      {
        title: '我がふるさと',
        img: require('@/assets/gallery/izumo.jpeg')
      }
    ]
  },
  getters: {
    getGalleries (state) {
      return state.galleries
    }
  }
}
export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    Home,
    Skill,
    Gallery,
    Works,
    Modal
  }
})
