import { Migration } from '@mikro-orm/migrations';

export class Migration20201125143522 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" text not null, "title" text not null);');
  }

}
