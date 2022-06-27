import { NotaDeleteComponent } from './components/portal/nota/nota-delete/nota-delete.component';
import { NotaUpdateComponent } from './components/portal/nota/nota-update/nota-update.component';
import { NotaRegistrarComponent } from './components/portal/nota/nota-registrar/nota-registrar.component';
import { NotaReadComponent } from './components/portal/nota/nota-read/nota-read.component';
import { AtividadeDeleteComponent } from './components/portal/atividade/atividade-delete/atividade-delete.component';
import { AulaDeleteComponent } from './components/portal/aula/aula-delete/aula-delete.component';
import { FrequenciaReadComponent } from './components/portal/frequencia/frequencia-read/frequencia-read.component';
import { AtividadeRegistrarComponent } from './components/portal/atividade/atividade-registrar/atividade-registrar.component';
import { AtividadeReadComponent } from './components/portal/atividade/atividade-read/atividade-read.component';
import { AulaReadComponent } from './components/portal/aula/aula-read/aula-read.component';
import { AulaRegistrarComponent } from './components/portal/aula/aula-registrar/aula-registrar.component';
import { TurmaListAlunosComponent } from './components/turma/turma-list-alunos/turma-list-alunos.component';
import { PortalProfessorComponent } from './components/portal/portal-professor/portal-professor.component';
import { TurmaUpdateComponent } from './components/turma/turma-update/turma-update.component';
import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { HeaderComponent } from './components/header/header.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ProfessorReadComponent } from './components/professor/professor-read/professor-read.component';
import { ProfessorCreateComponent } from './components/professor/professor-create/professor-create.component';
import { ProfessorUpdadeComponent } from './components/professor/professor-updade/professor-updade.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';
import { AulaUpdateComponent } from './components/portal/aula/aula-update/aula-update.component';
import { AtividadeUpdateComponent } from './components/portal/atividade/atividade-update/atividade-update.component';
import { AulaViewsComponent } from './components/portal/aula/aula-views/aula-views.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'alunos', component: AlunoReadComponent },
      { path: 'alunos/create', component: AlunoCreateComponent },
      { path: 'alunos/update/:id', component: AlunoUpdateComponent },
      { path: 'alunos/delete/:id', component: AlunoDeleteComponent },

      { path: 'professores', component: ProfessorReadComponent },
      { path: 'professores/create', component: ProfessorCreateComponent },
      { path: 'professores/update/:id', component: ProfessorUpdadeComponent },
      { path: 'professores/delete/:id', component: ProfessorDeleteComponent },

      { path: 'turmas', component: TurmaReadComponent },
      { path: 'turmas/create', component: TurmaCreateComponent },
      { path: 'turmas/update/:id', component: TurmaUpdateComponent },
      { path: 'turmas/delete/:id', component: TurmaDeleteComponent },

      { path: 'portalProfessor', component: PortalProfessorComponent },
      { path: 'turmaAlunos', component: TurmaListAlunosComponent },

      { path: 'aulas', component: AulaReadComponent },
      { path: 'aulaRegistrar/create', component: AulaRegistrarComponent },
      { path: 'aulas/update/:id', component: AulaUpdateComponent },
      { path: 'aulas/delete/:id', component: AulaDeleteComponent },
      { path: 'aulas/views/:id', component: AulaViewsComponent },

      { path: 'atividades', component: AtividadeReadComponent },
      { path: 'atividadeRegistrar/create', component: AtividadeRegistrarComponent },
      { path: 'atividades/update/:id', component: AtividadeUpdateComponent },
      { path: 'atividades/delete/:id', component: AtividadeDeleteComponent },

      { path: 'frequencia', component: FrequenciaReadComponent },

      { path: 'notas', component: NotaReadComponent },
      { path: 'notaRegistrar', component: NotaRegistrarComponent},
      { path: 'notas/update/:id', component: NotaUpdateComponent },
      { path: 'notas/delete/:id', component: NotaDeleteComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
