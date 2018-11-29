import { NgModule } from '@angular/core';

import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
import { FirstPipe } from './first.pipe';
import { InitialsPipe } from './initials.pipe';
import { IsArrayPipe } from './is.array.pipe';
import { LastPipe } from './last.pipe';
import { LoadPipe } from './load.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SanitizePipe } from './sanitize.pipe';

const NIT_PIPES = [
	SafeUrlPipe,
	SanitizePipe,
	InitialsPipe,
	ArrayJoinPipe, ArrayImpureJoinPipe,
	IsArrayPipe,
	LoadPipe,
	FirstPipe,
	LastPipe
];

@NgModule({
	declarations: NIT_PIPES,
	exports: NIT_PIPES
})
export class NitPipesModule { }
