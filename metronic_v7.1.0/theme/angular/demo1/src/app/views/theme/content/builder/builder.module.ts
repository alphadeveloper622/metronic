// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
// NgBootstrap
import { NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Partials
import { PartialsModule } from '../../../partials/partials.module';
// Highlight JS
import { HighlightModule } from 'ngx-highlightjs';
// CoreModule
import { CoreModule } from '../../../../core/core.module';
// Builder component
import { BuilderComponent } from './builder.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		FormsModule,
		MatTabsModule,
		CoreModule,
		PerfectScrollbarModule,
		HighlightModule,
		RouterModule.forChild([
			{
				path: '',
				component: BuilderComponent
			}
		]),

		// ng-bootstrap modules
		NgbTabsetModule,
		NgbTooltipModule
	],
	providers: [],
	declarations: [BuilderComponent]
})
export class BuilderModule {
}
