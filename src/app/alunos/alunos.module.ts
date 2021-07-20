import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosService } from './alunos.service';

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [CommonModule, AlunosRoutingModule, FormsModule],
  exports: [],
  providers: [AlunosService],
})
export class AlunosModule {}
