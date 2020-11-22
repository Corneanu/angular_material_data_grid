import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from '../pages/demo/demo.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { OverviewComponent } from '../pages/overview/overview.component';
import { ContainerComponent } from '../components/container/container.component';
import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { InstallationComponent } from '../pages/installation/installation.component';
import { PropertiesAndEventsComponent } from '../pages/properties-and-events/properties-and-events.component';
import { ColumnsAndFiltersComponent } from '../pages/columns-and-filters/columns-and-filters.component';
import { StringFilterComponent } from '../pages/string-filter/string-filter.component';
import { MultiSelectFilterComponent } from '../pages/multi-select-filter/multi-select-filter.component';
import { TagFilterComponent } from '../pages/tag-filter/tag-filter.component';
import { NumericFilterComponent } from '../pages/numeric-filter/numeric-filter.component';
import { DateRangeFilterComponent } from '../pages/date-range-filter/date-range-filter.component';
import { ButtonGroupBuilderComponent } from '../pages/button-group-builder/button-group-builder.component';
import { UrlBuilderComponent } from '../pages/url-builder/url-builder.component';

const routes: Routes = [
  { path: '' , redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'gettingStarted', component: ContainerComponent,
    children: [
      { path: 'demo', component: DemoComponent },
      { path: 'demo/:uid', component: DetailComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'installation', component: InstallationComponent },
      { path: 'propertiesAndEvents', component: PropertiesAndEventsComponent }
    ]
  },
  { path: 'columnsAndFilters', component: ContainerComponent,
    children: [
      { path: 'overview', component: ColumnsAndFiltersComponent },
      { path: 'stringFilter', component: StringFilterComponent },
      { path: 'multiSelectFilter', component: MultiSelectFilterComponent },
      { path: 'tagFilter', component: TagFilterComponent },
      { path: 'numericFilter', component: NumericFilterComponent },
      { path: 'dateRangeFilter', component: DateRangeFilterComponent },
      { path: 'urlBuilder', component: UrlBuilderComponent },
      { path: 'buttonGroupBuilder', component: ButtonGroupBuilderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
