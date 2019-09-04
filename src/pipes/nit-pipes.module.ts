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

const NIT_PIPES = [
	ArrayJoinPipe, ArrayImpureJoinPipe,
	DebouncePipe,
	FirstPipe,
	InitialsPipe,
	IsArrayPipe,
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
