import { NgModule } from '@angular/core';

import { SafeUrlPipe } from './safe-url.pipe';
import { InitialsPipe } from './initials.pipe';
import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
import { IsArrayPipe } from './is.array.pipe';
import { SanitizePipe } from './sanitize.pipe';
import { LoadPipe } from './load.pipe';

const NIT_PIPES = [
	SafeUrlPipe,
	SanitizePipe,
	InitialsPipe,
	ArrayJoinPipe, ArrayImpureJoinPipe,
	IsArrayPipe,
	LoadPipe
];

@NgModule({
	declarations: NIT_PIPES,
	exports: NIT_PIPES,
})
export class NitPipesModule { }
