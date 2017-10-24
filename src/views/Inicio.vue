<template>
  <div>
    <div class="header-hero">
      <section class="hero is-medium">
        <div class="hero-image"></div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title has-text-white">
              Nunca mais se esqueça onde parou
            </h1>
            <h2 class="subtitle has-text-grey">
              Marque agora a leitura de suas novels
            </h2>
            <div class="buttons is-centered">
              <span class="button is-info is-medium">Cadastrar</span>
              <span class="button is-white is-medium">Logar</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h1 class="title is-6 has-text-centered">Segunda-feira, 23 de Outubro de 2017</h1>
              <b-table :data="novels">
                <template slot-scope="props">
                  <b-table-column label="Título">
                    <router-link to='Livros'>{{ props.row.title }}</router-link>
                  </b-table-column>

                  <b-table-column label="Lançamento">
                    {{ props.row.release }}
                  </b-table-column>

                  <b-table-column label="Tradutor" centered>
                    {{ props.row.translator }}
                  </b-table-column>
                </template>
              </b-table>
            </div>
            <div class="box">
              <h1 class="title is-6 has-text-centered">Segunda-feira, 23 de Outubro de 2017</h1>
              <b-table :data="novels">
                <template slot-scope="props">
                  <b-table-column label="Título">
                    <router-link to='Livros'>{{ props.row.title }}</router-link>
                  </b-table-column>

                  <b-table-column label="Lançamento">
                      {{ props.row.release }}
                  </b-table-column>

                  <b-table-column label="Tradutor" centered>
                      {{ props.row.translator }}
                  </b-table-column>
                </template>
              </b-table>
            </div>

            <b-pagination
              :total=200
              :current.sync="current"
            />
          </div>
          <div class="column is-one-quarter">
            <b-field>
              <b-input placeholder="Pesquisar Novel"></b-input>
            </b-field>

            <div class="panel">
              <p class="panel-heading">Gêneros</p>

              <div class="genre" v-for="genre in genres" :key="genre.id">
                <span>{{ genre.name }}</span>
                <b-tag class="is-pulled-right">{{ genre.count }}</b-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data() {
    const novels = [
      { id: 1, title: 'The Ultimate Evolution', release: 'c555', translator: 'Qidian International' },
      { id: 2, title: 'Shura’s Wrath', release: 'c184', translator: 'Qidian International' },
      { id: 3, title: 'The Ultimate Evolution', release: 'c575', translator: 'Gravity Tales' },
      { id: 4, title: 'The Ultimate Evolution', release: 'c6', translator: 'Exiled Rebels Scanlations' },
      { id: 5, title: 'The Ultimate Evolution', release: 'c23', translator: 'Linearcrown' },
    ];
    const genres = [
      { id: 1, name: 'Ação', count: 324 },
      { id: 2, name: 'Aventura', count: 100 },
      { id: 3, name: 'Comédia', count: 41 },
      { id: 4, name: 'Artes Marciais', count: 31 },
      { id: 5, name: 'Fantasia', count: 123 },
      { id: 6, name: 'Shounen', count: 441 },
      { id: 7, name: 'Mistério', count: 423 },
      { id: 8, name: 'Supernatural', count: 213 },
      { id: 9, name: 'Psicológico', count: 21 },
      { id: 10, name: 'Sci-fy', count: 11 },
    ];

    return {
      novels,
      genres,
      total: 200,
      current: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-hero {
  position: relative;
}

.hero {
  background: #000;
}

.hero-image {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: url("http://demo.nrgthemes.com/projects/nrgnetwork/img/bg.jpg");
  background-size: cover;
  opacity: .2;
};

.genre {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #363636;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  padding: 0.5em 0.75em;
}
</style>


