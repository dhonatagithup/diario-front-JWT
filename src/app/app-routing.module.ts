import { TurmaPovoadaComponent } from './components/turma/turma-povoada/turma-povoada.component';
import { HeaderComponent } from './components/header/header.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { AulasLecionadasViewsComponent } from './components/aulasLecionadas/aulas-lecionadas-views/aulas-lecionadas-views.component';
import { ObservacoesViewsComponent } from './components/observacoes/observacoes-views/observacoes-views.component';
import { DisciplinaReadComponent } from './components/disciplina/disciplina-read/disciplina-read.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AulasLecionadasCreateComponent } from './components/aulasLecionadas/aulas-lecionadas-create/aulas-lecionadas-create.component';
import { AulasLecionadasDeleteComponent } from './components/aulasLecionadas/aulas-lecionadas-delete/aulas-lecionadas-delete.component';
import { AulasLecionadasReadComponent } from './components/aulasLecionadas/aulas-lecionadas-read/aulas-lecionadas-read.component';
import { AulasLecionadasUpdateComponent } from './components/aulasLecionadas/aulas-lecionadas-update/aulas-lecionadas-update.component';
import { HomeComponent } from './components/home/home.component';
import { ObservacoesCreateComponent } from './components/observacoes/observacoes-create/observacoes-create.component';
import { ObservacoesDeleteComponent } from './components/observacoes/observacoes-delete/observacoes-delete.component';
import { ObservacoesReadComponent } from './components/observacoes/observacoes-read/observacoes-read.component';
import { ObservacoesUpdateComponent } from './components/observacoes/observacoes-update/observacoes-update.component';
import { NavComponent } from './components/nav/nav.component';
import { DisciplinaCreateComponent } from './components/disciplina/disciplina-create/disciplina-create.component';
import { DisciplinaUpdateComponent } from './components/disciplina/disciplina-update/disciplina-update.component';
import { DisciplinaDeleteComponent } from './components/disciplina/disciplina-delete/disciplina-delete.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ProfessorReadComponent } from './components/professor/professor-read/professor-read.component';
import { ProfessorCreateComponent } from './components/professor/professor-create/professor-create.component';
import { ProfessorUpdadeComponent } from './components/professor/professor-updade/professor-updade.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';

const routes: Routes = [
      { path: 'login', component: LoginComponent },
      {
        path: '', component: NavComponent, canActivate: [AuthGuard], children: [
          { path: 'home', component: HomeComponent},

          { path: 'alunos', component: AlunoReadComponent},
          { path: 'alunos/create', component: AlunoCreateComponent},
          { path: 'alunos/update/:id', component: AlunoUpdateComponent},
          { path: 'alunos/delete/:id', component: AlunoDeleteComponent},

          { path: 'professores', component: ProfessorReadComponent},
          { path: 'professores/create', component: ProfessorCreateComponent},
          { path: 'professores/update/:id', component: ProfessorUpdadeComponent},
          { path: 'professores/delete/:id', component: ProfessorDeleteComponent},

          { path: 'observacoes', component: ObservacoesReadComponent},
          { path: 'observacoes/create', component: ObservacoesCreateComponent},
          { path: 'observacoes/update/:id', component: ObservacoesUpdateComponent},
          { path: 'observacoes/delete/:id', component: ObservacoesDeleteComponent},
          { path: 'observacoes/views/:id', component: ObservacoesViewsComponent},

          { path: 'aulasLecionadas', component: AulasLecionadasReadComponent},
          { path: 'aulasLecionadas/create', component: AulasLecionadasCreateComponent},
          { path: 'aulasLecionadas/update/:id', component: AulasLecionadasUpdateComponent},      
          { path: 'aulasLecionadas/delete/:id', component: AulasLecionadasDeleteComponent},
          { path: 'aulasLecionadas/views/:id', component: AulasLecionadasViewsComponent},

          { path: 'disciplinas', component: DisciplinaReadComponent},
          { path: 'disciplinas/create', component: DisciplinaCreateComponent},
          { path: 'disciplinas/update/:id', component: DisciplinaUpdateComponent},
          { path: 'disciplinas/delete/:id', component: DisciplinaDeleteComponent},

          { path: 'turmas', component: TurmaReadComponent},
          { path: 'turmas/create', component: TurmaCreateComponent},
          { path: 'turmas/adicionar/:id', component: TurmaPovoadaComponent},

          { path: 'disciplinas/update/:id', component: DisciplinaUpdateComponent},
          { path: 'disciplinas/delete/:id', component: DisciplinaDeleteComponent}
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
