import { NgModule } from '@angular/core';

import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
import { DebouncePipe } from './debounce.pipe';
import { FirstPipe } from './first.pipe';
import { InitialsPipe } from './initials.pipe';
import { IsArrayPipe } from './is.array.pipe';
import { IsBooleanPipe } from './is.boolean.pipe';
import { IsDatePipe } from './is.date.pipe';
import { IsFunctionPipe } from './is.function.pipe';
import { IsNullPipe } from './is.null.pipe';
import { IsStringPipe } from './is.string.pipe';
import { LastPipe } from './last.pipe';
import { LoadPipe } from './load.pipe';
import { SafePipe } from './safe.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SanitizePipe } from './sanitize.pipe';
import { XFilterPipe } from './xfilter.pipe';

@NgModule({
	declarations: NitPipesModule.PIPES,
	exports: NitPipesModule.PIPES
})
export class NitPipesModule {

	public static readonly PIPES: any[] = [
		ArrayJoinPipe, ArrayImpureJoinPipe,
		DebouncePipe,
		FirstPipe,
		InitialsPipe,
		IsArrayPipe,
		IsBooleanPipe,
		IsDatePipe,
		IsFunctionPipe,
		IsNullPipe,
		IsStringPipe,
		LastPipe,
		LoadPipe,
		SafePipe,
		SafeUrlPipe,
		SanitizePipe,
		XFilterPipe
	];
}
