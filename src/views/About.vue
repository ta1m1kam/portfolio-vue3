<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16">
        <section class="biography animated" data-animated="shake">
          <h1>BIOGRAPHY</h1>
          <ul>
            <li class="fadeInUp">
              <p>2016年 松江高専 情報工学科 卒業</p>
              松江高専ではDeep LearningのフレームワークであるChainerを用いて農作物の土壌水分量を予測する研究を行った.
            </li>
            <li class="fadeInUp">
              <p>2016年 千葉大学 情報画像学科 入学</p>
              千葉大学では色覚・色彩・物の見え方に興味を持ち視覚系の研究室に所属している. <br>
              ポートフォリオで紹介してある作品はカンファレンス・コンテストなどで発表し，企業などからフィードバックなどをもらい，改善点を考えている．
            </li>
            <li class="fadeInUp">
              <p>2018年 千葉大学 情報画像学科 卒業</p>
            </li>
            <li class="fadeInUp">
              <p>2018年 千葉大学大学院融合理工学府 入学</p>
              色域拡大効果という色の分散がターゲットの色の見えに影響を与える研究の第一人者 <br>
              肌の明るさ評価のグローバル比較のアプリケーションエンジニア兼リサーチャー
            </li>
          </ul>
        </section>

        <section class="internsip" data-animated="shake">
          <h1>INTERNSHIP</h1>
          <ul class="internsip-list">
            <li class="fadeInUp">
              <!--クックパッド-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/cookpad.png"> Cookpad.inc </h3>
              サマーインターン<br>
              <a href="http://mikamimikami.hatenablog.com/entry/2018/09/19/235327?_ga=2.170445539.250520377.1539183951-2113681865.1535042766">インターン詳細へ</a><br>
            </li>

            <li class="fadeInUp">
              <!--DMM-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/dmm.png"> 合同会社 Dmm.com </h3>
              サマーインターン<br>
              Life+事業部 Menusの開発 <br>
              <a href="http://mikamimikami.hatenablog.com/entry/2018/09/17/180202?_ga=2.123988809.250520377.1539183951-2113681865.1535042766">インターン詳細へ</a><br>
            </li>

            <li class="fadeInUp">
              <!--クラウドワークス-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/crowdworks.png">  CrowdWorks.inc </h3>
              長期インターン<br>
              「クラウドテック」事業部での長期インターン<br>
              新規サービス開発 tech craftなど <br>
              Ruby on Rails <br>
              React.js <br>
              <a href="https://crowdtech.jp/">クラウドテックへ</a><br>
            </li>

            <li class="fadeInUp">
              <!--Karappo-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/karappo.png">  Karappo.inc </h3>
              長期インターン<br>
              Drawwwersの開発<br>
              Ruby on Rails <br> Vue.js<br>
              <a href="https://karappo.net/works/">Karappoへ</a><br>
            </li>

            <li class="fadeInUp">
              <!--イタンジ-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/iti.png">  イタンジ株式会社 </h3>
              サマーインターン<br>
              RailsによるWebアプリケーションの作成<br>
              Gitによるチーム開発<br>
              機械学習を用いた簡易アプリケーション作成<br>
            </li>

            <li class="fadeInUp">
              <!--ドリーム・アーツ-->
              <h3 class="company-title"><img class="company-logo" src="../assets/company/da.png"> 株式会社ドリーム・アーツ </h3>
              サマーインターン<br>
              DeepLearning・機械学習のライブラリであるTensorFlowを用いた自然言語処理<br>
              自然言語処理を行うChatBotをチームによって開発<br>
            </li>

            <li class="fadeInUp">
              <h3 class="company-title"><img class="company-logo" src="../assets/company/pt.png">  株式会社パソナテック </h3>
              サマーインターン<br>
              合宿インターン。ハッカソン・アイディアソン的なやつ。<br>
              消耗品の自動購買システムを考案し、簡単なモックプロダクトまで作成した。<br>
              最優秀賞をもらいました<br>
            </li>
          </ul>
        </section>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
  p {
    font-weight: bold;
  }

  .internsip-list {
    /*text-align: left;*/
  }
  .company-title {
    height: 60px;
    line-height: 60px;
    vertical-align:middle;
    margin-bottom: 0;
  }

  .company-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align:middle;
  }

  section {
    /*position: relative;*/
    min-height: 10vh;
    color: #333;
  }
</style>
