import { NgModule } from '@angular/core';

import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
import { FirstPipe } from './first.pipe';
import { InitialsPipe } from './initials.pipe';
import { IsArrayPipe } from './is.array.pipe';
import { LastPipe } from './last.pipe';
import { LoadPipe } from './load.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SanitizePipe } from './sanitize.pipe';
import { SafePipe } from './safe.pipe';
import { XFilterPipe } from './xfilter.pipe';
import { DebouncePipe } from './debounce.pipe';
import { IsBooleanPipe } from './is.boolean.pipe';
import { IsFunctionPipe } from './is.function.pipe';
import { IsNullPipe } from './is.null.pipe';
import { IsStringPipe } from './is.string.pipe';
import { IsDatePipe } from './is.date.pipe';

const NIT_PIPES = [
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

@NgModule({
	declarations: NIT_PIPES,
	exports: NIT_PIPES
})
export class NitPipesModule { }
